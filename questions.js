// questions.js
// Liste des questions du quiz GSE.
// type "simple"  -> réponse courte (1-2 mots), tolère fautes de frappe/accents
// type "keyword" -> réponse plus longue, on vérifie qu'une majorité des mots-clés sont présents
// type "cite"    -> il faut citer au moins n éléments parmi une liste

const QUESTIONS = [
  { q: "Que signifie TO ?", type: "simple", answer: "Timeout" },
  { q: "Que signifie GSE ?", type: "keyword", answer: "Gestion Serveur" },
  { q: "Que faire en cas de doute sur une sanction ?", type: "keyword", answer: "dm un HG" },
  {
    q: "Cite 3 HG",
    type: "cite",
    names: ["Neb", "Talion", "Rocks", "Sosa", "Échographie", "Suzuya", "Warka", "Noshi", "Ani", "Skyminex", "Nocta"],
    n: 3,
  },
  { q: "Quelle est l'utilité des tickets owners ?", type: "keyword", answer: "Pouvoir se plaindre d'un contrib" },
  { q: "Quelle est l'utilité des tickets BL ?", type: "keyword", answer: "Pouvoir demander à être unBL" },
  { q: "À quoi servent les formations ?", type: "keyword", answer: "Former quelqu'un à entrer en GSE" },
  { q: "À quoi servent les entretiens ?", type: "keyword", answer: "Voir le profil de quelqu'un avant qu'il rentre en GSE" },
  { q: "Quelle est l'utilité des supports vocaux ?", type: "keyword", answer: "Pouvoir régler un problème oralement" },
  { q: "Rocks Mog All, Vrai ou Faux ?", type: "simple", answer: "Vrai" },
  { q: "Plus Tony ou Sosa ?", type: "simple", answer: "Sosa" },
  { q: "À quoi servent les logs ?", type: "keyword", answer: "Voir les actes de modération ou les actions faites sur Shibuya" },
  { q: "Que signifie « grab » ?", type: "keyword", answer: "Ramenez quelqu'un en gestion" },
  { q: "Que signifie BL ?", type: "simple", answer: "Blacklist" },
  { q: "À quoi sert le RC ?", type: "simple", answer: "Recrutement" },
  { q: "À quoi sert le CR ?", type: "keyword", answer: "Compte Rendu" },
  { q: "Que signifie BLR ?", type: "keyword", answer: "Blacklist Role" },
  { q: "Que signifie RC ?", type: "simple", answer: "Recrutement" },
  { q: "À partir de quel grade peut-on faire une formation ?", type: "simple", answer: "Confirmé" },
  { q: "Si tu as un problème en gestion, vers quel grade HG te réfères-tu ?", type: "keyword", answer: "Chef Gestion" },
];

module.exports = QUESTIONS;
