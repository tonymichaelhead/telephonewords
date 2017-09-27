function telephoneWords (digitString) {
    const combos = [];
    let comboString = '';
    
    
    const recurse = (comboString, remainingDigits) => {
    
      if (comboString.length === 4) {
        combos.push(comboString);
        return;
      }
      console.log('remainingDigits: ', remainingDigits)
      remainingDigits.forEach(remainingDigit => {
        let chars = getCharactersFromDigit(remainingDigit);
        const remaining = remainingDigits.slice();
        remaining.shift();
        
        chars.forEach(char => {
          recurse(comboString + char, remaining);
        });
      });
    }
    
    recurse('', digitString.split(''));
    
    return combos;
  }
  
  function getCharactersFromDigit(digitString) {
    const characters = [];
    
    if (digitString === '0' || digitString === '1') {
      characters.push(digitString);
    } else if (digitString === '2') {
      'abc'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '3') {
      'def'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '4') {
      'ghi'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '5') {
      'jkl'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '6') {
      'mno'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '7') {
      'pqrs'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '8') {
      'tuv'.split('').forEach(char => {
        characters.push(char);
      });
    } else if (digitString === '9') {
      'wxyz'.split('').forEach(char => {
        characters.push(char);
      });
    }
    return characters;
  }
  
  console.log(telephoneWords('1123'));
  // console.log(getCharactersFromDigit('9'))
  