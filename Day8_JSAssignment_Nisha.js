<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Student List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .student {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    form {
      margin-top: 20px;
    }
    input {
      margin: 5px;
      padding: 5px;
    }
    button {
      margin-top: 10px;
      padding: 5px 10px;
    }
  </style>
</head>
<body>
  <h1>Student List</h1>
  <div id="studentList"></div>

  <button onclick="showTopScorers()">Show Top Scorers</button>

  <h2>Add New Student</h2>
  <form id="studentForm">
    <input type="text" id="name" placeholder="Name" required />
    <input type="text" id="roll" placeholder="Roll Number" required />
    <input type="number" id="marks" placeholder="Marks" required />
    <button type="submit">Add Student</button>
  </form>

  <script>
    let students = [
      { name: "Tans", roll: "101", marks: 85 },
      { name: "peppa", roll: "102", marks: 67 },
      { name: "Charlie", roll: "103", marks: 72 }
    ];

    function displayStudents(list) {
      const container = document.getElementById("studentList");
      container.innerHTML = ""; // Clear previous list
      list.forEach(student => {
        const div = document.createElement("div");
        div.className = "student";
        div.innerHTML = `<strong>Name:</strong> ${student.name} <br>
                         <strong>Roll No:</strong> ${student.roll} <br>
                         <strong>Marks:</strong> ${student.marks}`;
        container.appendChild(div);
      });
    }

    function showTopScorers() {
      const topScorers = students.filter(student => student.marks > 70);
      displayStudents(topScorers);
    }

    document.getElementById("studentForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent page refresh
      const name = document.getElementById("name").value.trim();
      const roll = document.getElementById("roll").value.trim();
      const marks = parseInt(document.getElementById("marks").value);

      if (name && roll && !isNaN(marks)) {
        students.push({ name, roll, marks });
        displayStudents(students); // Refresh list
        this.reset(); // Clear the form
      }
    });

    // Initial display
    displayStudents(students);
  </script>
</body>
</html>
