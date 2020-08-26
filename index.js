function takeANumber(line, name) {
  line.push(name);

  var place = line.length;

  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = line[0];
    line.shift();
    return `Currently serving ${name}`; 
  }
}
