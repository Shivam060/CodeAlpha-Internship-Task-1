document.getElementById('calculateBtn').addEventListener('click', calculateAge);

function calculateAge() {
    var dob = document.getElementById('dob').value;
    var mob = document.getElementById('mob').value;
    var yob = document.getElementById('yob').value;

    if (dob && mob && yob) {
        var birthDate = new Date(`${yob}-${mob}-${dob}`);
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        document.getElementById('result').innerText = `Your age is ${age} years.`;
    } else {
        document.getElementById('result').innerText = "Please enter valid date of birth.";
    }
}
