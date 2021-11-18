// ABAC
// AABC -> 1
// AACB -> 2
// ABAC -> 3
// ABCA -> 4
// ACAB -> 5
// ACBA -> 6
// BAAC -> 7
// BACA -> 8
// BCAA -> 9
// CAAB -> 10
// CABA -> 11
// CBAA -> 12

function fact(n) {
  if (n < 3) {
    return n
  }
  return n * fact(n - 1)
}

// QUESTION trié -> EINOQSTU
// nombre de combinaisons en prenant chacune des 4 lettres avant Q
// 4 * 7! = 20160

// E*******  5040
// I*******  5040
// N*******  5040
// O*******  5040

// QE******   720
// QI******   720
// QN******   720
// QO******   720
// QS******   720
// QT******   720

// QU------
// QUEI****    24
// QUEN****    24
// QUEO****    24

// QUESI***     6
// QUESN***     6
// QUESO***     6

// QUESTINO     1
// QUESTION     1

// BEEEKKOOPR
// calcul fact sur EEEKK 5! = 120
// EEEKK
// EEKEK
// EEKKE
// EKEEK
// EKEKE
// EKKEE
// KEEEK
// KEEKE
// KEKEE
// KKEEE

// On enlève Q de l'équation
// EINOSTU -> toutes combinaisons avant U -> EINOST = 6 lettres, 6! = 720
// 6 * 720 -> 4320

// On enlève U
// On enlève E

// INOST toutes les combinaisons de I****, N****, O****. 3 * 4! 72
// On enlève S
// T puis combinaisons de INO

// trouvé le nombre de combinaisons de EINOSTU -> 7! = 5040 mais ATTENTION
// il faut prendre celles AVANT QUESTION
// DONC U puis EINOST -> 6! = 720

function alphabeticAnagrams(word) {
  console.log('=> aa', word)
  if (!word) return 1

  const sorted = word.split('').sort()
  let pos = 0

  let i = 0
  const first = word[i]
  j = 0
  const map = {}
  for (let c of sorted) {
    if (c === first) {
      break;
    }
    if (!map[c]) {
      map[c] = 1
      j++
    }
    // else map[c] += 1
  }
  // const div = Object.values(map).reduce((carry, item) => carry * fact(item), 1)
  // console.log(div, fact(word.length - 1), fact(word.length - 1) / div)
  pos += j * fact(word.length - 1) 
  return pos + alphabeticAnagrams(word.substr(1))
}

module.exports = alphabeticAnagrams