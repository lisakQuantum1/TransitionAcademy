const uri = 'api/characters';
let todos = [];

function getCharacters() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayCharacters(data))
        .catch(error => console.error('Unable to get characters.', error));
}

function addCharacter() {
    const addNameTextbox = document.getElementById('add-name');

    const character = {
        isVillian: false,
        isMainCharacter: false,
        isSideCharacter: false,
        name: addNameTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    })
        .then(response => response.json())
        .then(() => {
            getCharacters();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add character.', error));
}

function deleteCharacter(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getCharacters())
        .catch(error => console.error('Unable to delete character.', error));
}

function displayCharacterForm(id) {
    const character = characters.find(character => character.id === id);

    document.getElementById('edit-name').value = character.name;
    document.getElementById('edit-id').value = character.id;
    document.getElementById('edit-isVillian').checked = character.isVillian;
    document.getElementById('edit-isMainCharacter').checked = character.isMainCharacter;
    document.getElementById('edit-isSideCharacter').checked = character.isSideCharacter;
    document.getElementById('editList').style.display = 'block';
}

function updateCharacter() {
    const characterId = document.getElementById('edit-id').value;
    const character = {
        id: parseInt(characterId, 10),
        isVillian: document.getElementById('edit-isVillian').checked,
        isMainCharacter: document.getElementById('edit-isMainCharacter').checked,
        isSideCharacter: document.getElementById('edit-isSideCharacter').checked,
        name: document.getElementById('edit-name').value.trim()
    };

    fetch(`${uri}/${characterId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    })
        .then(() => getCharacters())
        .catch(error => console.error('Unable to update character.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editList').style.display = 'none';
}

function _displayCount(characterCount) {
    const name = (characterCount === 1) ? 'character' : 'characters';

    document.getElementById('counter').innerText = `${characterCount} ${name}`;
}

function _displayCharacters(data) {
    const tBody = document.getElementById('characters');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(character => {
        let isVillianCheckbox = document.createElement('input');
        isVillianCheckbox.type = 'checkbox';
        isVillianCheckbox.disabled = true;
        isVillianCheckbox.checked = character.isVillian;

        let isMainCharacterCheckbox = document.createElement('input');
        isMainCharacterCheckbox.type = 'checkbox';
        isMainCharacterCheckbox.disabled = true;
        isMainCharacterCheckbox.checked = character.isMainCharacter;

        let isSideCharacterCheckbox = document.createElement('input');
        isSideCharacterCheckbox.type = 'checkbox';
        isSideCharacterCheckbox.disabled = true;
        isSideCharacterCheckbox.checked = character.isSideCharacter;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayCharacterForm(${character.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteCharacter(${character.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(character.name);
        td1.appendChild(textNode);

        let td2 = tr.insertCell(1);
        td2.appendChild(isVillianCheckbox);

        let td3 = tr.insertCell(2);
        td3.appendChild(isMainCharacterCheckbox);

        let td4 = tr.insertCell(3);
        td4.appendChild(isSideCharacterCheckbox);

        let td5 = tr.insertCell(4);
        td5.appendChild(editButton);

        let td6 = tr.insertCell(5);
        td6.appendChild(deleteButton);
    });

    characters = data;
}