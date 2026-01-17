#  ReadNote

Un lecteur PDF minimaliste avec éditeur de notes intégré pour prendre des notes pendant votre lecture.

![Version](https://img.shields.io/badge/version-1.0.0-black)
![License](https://img.shields.io/badge/license-MIT-black)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-black)

##  À propos

**ReadNote** est un outil simple et élégant qui permet de lire des fichiers PDF tout en prenant des notes directement à côté. Parfait pour les étudiants, chercheurs, lecteurs passionnés ou toute personne qui aime organiser ses pensées pendant la lecture.

### Philosophie du projet
- **Minimaliste** : Interface noir/blanc pure, zéro distraction
- **Simple** : Un seul fichier HTML, aucune installation requise
- **Efficace** : Sauvegarde automatique des notes, export facile
- **Respectueux** : Aucune collecte de données, tout reste en local

##  Fonctionnalités

### Lecteur PDF
- ✅ Chargement de fichiers PDF depuis votre ordinateur
- ✅ Navigation page par page (boutons ou clavier)
- ✅ Affichage optimisé pour la lecture
- ✅ Support de tous les types de PDF

### Éditeur de Notes
- ✅ Éditeur de texte minimaliste et sans distraction
- ✅ Formatage basique (gras, italique, souligné)
- ✅ Sauvegarde automatique en local (localStorage)
- ✅ Interface masquable/affichable selon besoin

### Export & Sauvegarde
- ✅ Export des notes en PDF
- ✅ Export des notes en TXT
- ✅ Sauvegarde automatique en temps réel
- ✅ Récupération des notes au rechargement

##  Installation & Utilisation

### Méthode 1 : Utilisation directe
1. Téléchargez le fichier `readnote.html`
2. Ouvrez-le dans votre navigateur (Chrome, Firefox, Edge, Safari)
3. C'est tout ! Vous pouvez commencer à lire et prendre des notes

### Méthode 2 : Hébergement local
```bash
# Clonez le repo
git clone https://github.com/VOTRE-USERNAME/readnote.git

# Naviguez dans le dossier
cd readnote

# Ouvrez avec un serveur local (optionnel)
python -m http.server 8000
# Ou utilisez Live Server sur VSCode
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

##  Guide d'utilisation

### Charger un PDF
1. Cliquez sur le bouton **"Ouvrir un PDF"** dans l'en-tête
2. Sélectionnez un fichier PDF depuis votre ordinateur
3. Le PDF s'affiche automatiquement dans la partie gauche

### Navigation dans le PDF
- **Boutons** : Utilisez "← Précédent" et "Suivant →"
- **Clavier** : Flèches gauche/droite (à venir)

### Prendre des notes
1. Tapez directement dans l'éditeur de droite
2. Vos notes sont **sauvegardées automatiquement**
3. Utilisez les boutons de formatage pour mettre en gras, italique, ou souligner

### Formatage du texte
- **Gras** : Sélectionnez le texte et cliquez sur **B** (ou Ctrl/Cmd + B)
- **Italique** : Sélectionnez le texte et cliquez sur **I** (ou Ctrl/Cmd + I)
- **Souligné** : Sélectionnez le texte et cliquez sur **U** (ou Ctrl/Cmd + U)

Le formatage utilise la syntaxe Markdown :
- Gras : `**texte**`
- Italique : `*texte*`
- Souligné : `__texte__`

### Masquer/Afficher l'éditeur
- Cliquez sur **"Masquer/Afficher Notes"** pour avoir plus d'espace de lecture
- L'éditeur se cache/affiche avec une animation fluide

### Exporter vos notes
1. Cliquez sur **"Exporter Notes"**
2. Choisissez le format :
   - **OK** → Export en PDF
   - **Annuler** → Export en TXT
3. Le fichier se télécharge automatiquement

### Raccourcis clavier
- `Ctrl/Cmd + S` : Sauvegarder les notes manuellement
- `Ctrl/Cmd + B` : Mettre en gras
- `Ctrl/Cmd + I` : Mettre en italique
- `Ctrl/Cmd + U` : Souligner

##  Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Design minimaliste noir/blanc
- **JavaScript Vanilla** : Logique de l'application (zéro framework)
- **PDF.js** (Mozilla) : Rendu des fichiers PDF
- **jsPDF** : Export des notes en PDF
- **localStorage** : Sauvegarde locale des notes

##  Structure du projet

```
readnote/
│
├── readnote.html          # Application complète (tout-en-un)
├── README.md              # Ce fichier
└── LICENSE                # Licence MIT
```

##  Design & Interface

### Palette de couleurs
- **Fond** : Blanc pur (`#FFFFFF`)
- **Texte** : Noir pur (`#000000`)
- **Bordures** : Gris clair (`#CCCCCC`)
- **Arrière-plans** : Gris très clair (`#F5F5F5`)

### Principes de design
- Interface épurée sans distraction
- Contraste maximal pour une lecture confortable
- Typographie optimisée (Georgia pour l'éditeur)
- Responsive design (fonctionne sur mobile/tablette)

## Confidentialité & Sécurité

- ✅ **Aucune donnée envoyée** : Tout reste sur votre machine
- ✅ **Pas de tracking** : Zéro analytics, zéro cookies
- ✅ **Open source** : Code 100% transparent et auditable
- ✅ **Stockage local** : localStorage du navigateur uniquement

##  Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. **Fork** le projet
2. Créez une **branche** pour votre feature (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Pushez** sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Idées d'amélioration
- [ ] Support du mode sombre
- [ ] Synchronisation cloud (optionnelle)
- [ ] Support de plus de formats de fichiers (EPUB, MOBI)
- [ ] Organisation des notes par chapitre/section
- [ ] Recherche dans le PDF
- [ ] Surlignage de texte dans le PDF
- [ ] Annotations directement sur le PDF
- [ ] Support multi-langues

##  Limitations connues

- Le formatage des notes est basique (Markdown simple)
- Pas de synchronisation entre appareils (tout en local)
- Les très gros PDFs peuvent être lents à charger
- L'export PDF des notes est basique (texte simple)

##  Changelog

### Version 1.0.0 (2026-01-17)
- ✨ Release initiale
- ✅ Lecteur PDF fonctionnel
- ✅ Éditeur de notes avec formatage basique
- ✅ Sauvegarde automatique localStorage
- ✅ Export PDF/TXT
- ✅ Interface minimaliste noir/blanc
- ✅ Raccourcis clavier

##  Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

En résumé : vous pouvez utiliser, modifier et distribuer ce code librement, même commercialement.

##  Remerciements

- **Mozilla** pour PDF.js
- **jsPDF** pour l'export PDF
- La communauté open source

##  Contact & Support

- **Issues** : [GitHub Issues](https://github.com/VOTRE-USERNAME/readnote/issues)
- **Discussions** : [GitHub Discussions](https://github.com/VOTRE-USERNAME/readnote/discussions)

## 🌟 Star le projet !

Si **ReadNote** vous est utile, n'hésitez pas à mettre une ⭐ sur GitHub !

---

**Créé avec ❤️ pour les passionnés de lecture et de prise de notes**

*ReadNote - Lisez. Notez. Exportez.*