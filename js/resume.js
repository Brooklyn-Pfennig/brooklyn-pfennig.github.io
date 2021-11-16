function Institution(educationalInstitution, institutionWebsite, expectedDegree, startDate, endDate, courses, studentHours, studentGPA) {
    this.name = educationalInstitution;
    this.website = institutionWebsite;
    this.degree = expectedDegree;
    this.start = startDate;
    this.end = endDate;
    this.class = courses;
    this.hours = studentHours;
    this.points = studentGPA;

    this.getGPA = function() {
        return this.points / this.hours;
    }

    this.toHTML = function() {
        document.write("<h3>" + this.name + "</h3>");
        document.write("Website: " + this.website + "<br>");
        document.write("Degree: " + this.degree + "<br>");
        document.write("Start Date: " + this.start + "<br>");
        document.write("End Date: " + this.end + "<br>");
        document.write("Classes Taken: " + this.class + "<br>")
        document.write("GPA: " + this.getGPA())
    }
}
pennfield = new Institution ("Pennfield Academy", "Not Available", "High school diploma", "Fall 2016", "Spring 2021", 
"<ul><li><i>English 9 - A<li>British Lit/Comp - A<li>Physical Science - A<li>Algebra 1 - A<li>Algebra 2 - A<li>Geometry - A<li>Biology - A<li>Human Anatomy & Physiology - A<li>Geography - A<li>Phys Ed (Club Volleyball) - A<li>Nutrition - A<li>Speech - A<li>Music - A<li>Philosophy - A<li>World History - A</i></ul>", [4], [16])

bluefield = new Institution ("Bluefield College", "<a href=\"https://bluefield.edu\">bluefield.edu</a>", "Non-degree seeking", "Fall 2018", "Fall 2019",
 "<ul><li><i>Intro to Writing ENG1013 - A<li>Personal Finance BUS2603 - A- <li>Analytical Writing ENG1023 - A<li>Literature Appreciation ENG2003 - A-<li>United States History II HIS2023 - A<li>Intro to Psychology PSY1013 - A<li>Government PLS 1013 - A</i></ul>", [25], [98.20])

 liberty = new Institution ("Liberty University", "<a href=\"https://liberty.edu\">liberty.edu</a>", "Non-degree seeking", "Spring 2020", "Spring 2020", "<ul><li><i>Conversational Spanish I - A<li>Conversational Spanish II - A</i></ul>", [4], [16])

 westVirginia = new Institution ("West Virginia University", "<a href=\"https://wvu.edu\">wvu.edu</a>", "Non-degree seeking", "Fall 2017", "Fall 2017", "<ul><li><i>Intro to Computer Applications - A</i></ul>", [4],[16])

 pennfield.toHTML()
 bluefield.toHTML()
 liberty.toHTML()
 westVirginia.toHTML()