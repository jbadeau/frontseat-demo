package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"
)

type Transaction struct {
	ID          string    `json:"id"`
	FromAccount string    `json:"fromAccount"`
	ToAccount   string    `json:"toAccount"`
	Amount      float64   `json:"amount"`
	Currency    string    `json:"currency"`
	Status      string    `json:"status"`
	Timestamp   time.Time `json:"timestamp"`
	Description string    `json:"description,omitempty"`
}

type TransferRequest struct {
	FromAccount string  `json:"fromAccount"`
	ToAccount   string  `json:"toAccount"`
	Amount      float64 `json:"amount"`
	Currency    string  `json:"currency"`
	Description string  `json:"description,omitempty"`
}

var (
	transactions = make(map[string]*Transaction)
	txMutex      sync.RWMutex
	txCounter    = 0
)

func main() {
	http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/transactions", transactionsHandler)
	http.HandleFunc("/transactions/transfer", transferHandler)

	log.Println("CoinHub Transaction Service starting on :8082")
	if err := http.ListenAndServe(":8082", nil); err != nil {
		log.Fatal(err)
	}
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"status":  "healthy",
		"service": "transaction-service",
		"version": "1.0.0",
	})
}

func transactionsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	txMutex.RLock()
	defer txMutex.RUnlock()

	txList := make([]*Transaction, 0, len(transactions))
	for _, tx := range transactions {
		txList = append(txList, tx)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(txList)
}

func transferHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req TransferRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request", http.StatusBadRequest)
		return
	}

	// Validate request
	if req.FromAccount == "" || req.ToAccount == "" || req.Amount <= 0 {
		http.Error(w, "Invalid transfer request", http.StatusBadRequest)
		return
	}

	if req.Currency == "" {
		req.Currency = "USD"
	}

	// Create transaction
	txMutex.Lock()
	txCounter++
	tx := &Transaction{
		ID:          fmt.Sprintf("TX%06d", txCounter),
		FromAccount: req.FromAccount,
		ToAccount:   req.ToAccount,
		Amount:      req.Amount,
		Currency:    req.Currency,
		Status:      "completed",
		Timestamp:   time.Now(),
		Description: req.Description,
	}
	transactions[tx.ID] = tx
	txMutex.Unlock()

	log.Printf("Transaction %s: %s -> %s, %.2f %s", tx.ID, req.FromAccount, req.ToAccount, req.Amount, req.Currency)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(tx)
}
