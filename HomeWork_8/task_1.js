function upperCase(inp) {
  if (/^[A-Z]/.test(inp)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}
upperCase("data");
upperCase("DaTa");
