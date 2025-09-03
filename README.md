# 💬 Mon Chat Local avec Ollama

Un mini projet pour avoir son **ChatGPT maison** en local/offline.
Backend : [Ollama](https://ollama.com/) pour exécuter le modèle.
Frontend : une petite UI en HTML/JS (style ChatGPT sobre).
Proxy : un serveur Node/Express qui redirige vers l’API Ollama.

---

## ⚙️ Installation

### 1. Installer Ollama

* Téléchargez Ollama depuis [ollama.com](https://ollama.com/).
* Vérifiez qu’il tourne :

  ```bash
  curl http://localhost:11434/api/tags
  ```

### 2. Télécharger un modèle

Exemple avec Llama 3 :

```bash
ollama pull llama3
```

### 3. Cloner ce repo

```bash
git clone https://github.com/votre-user/mon-chat-local.git
cd mon-chat-local
```

### 4. Installer les dépendances serveur

```bash
npm install
```

### 5. Lancer le proxy Node

```bash
node server.js
```

---

## 🚀 Utilisation

1. Ouvrez [http://localhost:3000](http://localhost:3000)
2. Écrivez un message dans l’UI
3. Ollama répond via le modèle choisi (par défaut `llama3`)

---

## 📂 Structure

```
mon-chat-local/
├── server.js       # Proxy Express -> Ollama
└── public/
    └── index.html  # UI minimaliste style ChatGPT
```

---

## 📝 Notes

* Tout tourne **localement**, pas de cloud.
* Pour utiliser un autre modèle : changez `model: 'llama3'` dans `server.js` ou directement dans l’UI.
* Pour éviter des erreurs CORS si vous servez l’UI ailleurs :

  ```bash
  export OLLAMA_ORIGINS=http://localhost:3000
  ollama serve
  ```

---

## 📜 Licence

MIT — utilisez, modifiez et partagez librement ✌️
