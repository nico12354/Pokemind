
// Create the autofill input

var autofill_list = pokemonlist.map(x => x.name_fr);

var container = document.getElementById('pokeinput');
dl = document.createElement('datalist');
dl.id = 'autofill_list';
for (i = 0 ; i < autofill_list.length ; i += 1) {
    var option = document.createElement('option');
    option.value = autofill_list[i];
    dl.appendChild(option);
}
container.appendChild(dl);


