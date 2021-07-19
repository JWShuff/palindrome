function CheckPalindrome(text) {

  if (text.length === 0 || text.length === 1) {
    return true
  } else if (text.charAt(0) !== text.charAt(text.length - 1)) {
    return false;
  } else {
    return CheckPalindrome(text.slice(1, text.length-1))
  }
}

export default CheckPalindrome