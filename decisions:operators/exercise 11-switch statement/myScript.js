//SWITCH Statement

var studentGrade = "F";

/*if ( studentGrade == "A") {

  document.write("grade A student <br>");

} else if ( studentGrade == "B") {

  document.write("Grade B student <br>");

} else if ( studentGrade == "C") {

  document.write("Grade C student <br>");
}*/

switch (studentGrade) {

  case "A":
    document.write("grade A student <br>");
    break;

  case "B":
    document.write("grade B student<br>");
    break;

  case "C":
    document.write("grade C student<br>");
    break;

    default:
      document.write("plm n am gasit");

  }
