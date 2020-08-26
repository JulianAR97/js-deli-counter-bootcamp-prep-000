function takeANumber(line, name) {
  line.push(name);

  var place = line.length;

  return `Welcome, ${name}. You are number ${place} in line.``;
}
