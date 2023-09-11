function shuffleSelectedCheckboxes() {
    var checkboxes = document.getElementsByName('checkbox');
    var selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (selectedCheckboxes.length >= 2) {
        var randomIndex1 = Math.floor(Math.random() * selectedCheckboxes.length);
        var randomIndex2 = Math.floor(Math.random() * selectedCheckboxes.length);

        while (randomIndex1 === randomIndex2) {
            randomIndex2 = Math.floor(Math.random() * selectedCheckboxes.length);
        }

        var label1 = selectedCheckboxes[randomIndex1].nextElementSibling;
        var label2 = selectedCheckboxes[randomIndex2].nextElementSibling;

        var tempText = label1.textContent;
        label1.textContent = label2.textContent;
        label2.textContent = tempText;
    }
}

function showSelectedValues() {
    var checkboxes = document.getElementsByName('checkbox');
    var selectedValues = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedValues.push(checkbox.nextElementSibling.textContent);
        }
    });

    var resultDisplay = document.getElementById('result-display');
    resultDisplay.innerHTML = "Selected Values: " + selectedValues.join(", ");
}

function changeValues() {
    var checkboxes = document.getElementsByName('checkbox');
    var newLabelText = "Changed Value :)";

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.nextElementSibling.textContent = newLabelText;
        }
    });
}



