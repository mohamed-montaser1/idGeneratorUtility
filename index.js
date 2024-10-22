function* generateId() {
  const ids = [];
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersArr = [
    ...Array.from(letters),
    ...Array.from(letters.toUpperCase()),
  ];
  const nums = "1234567890".split("");
  const all = [...lettersArr, ...nums];

  while (true) {
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += all[Math.floor(Math.random() * all.length)];
    }
    if (ids.includes(id)) {
      continue; // Avoid recursion, just generate a new ID
    }
    ids.push(id); // Save the new ID to prevent duplicates
    yield id;
  }
}
