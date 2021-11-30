const students = {
    Candidates : function(){
        document.write("Name: "+this.name + "<br>");
        document.write("Age: " + this.age + "<br>");
        document.write("Marks: " + this.marks);
    }
}

const UnderGrads = Object.create(students)
UnderGrads.name = "Rahul Sethia"
UnderGrads.age = 18
UnderGrads.marks = 80

const Graduated = Object.create(students)
Graduated.name= "Himesh Singh"
Graduated.age = 22
Graduated.marks = "8.9 CGPA"