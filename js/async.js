
async function getMisProductos() {
    try {
        let response = await fetch('https://v2.jokeapi.dev/joke/Any')
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e)
    }
}


const myModal = document.getElementById('modalId')
ModifyModal(myModal)


async function ModifyModal($modal) {
    let value = await getMisProductos()
    $modal.addEventListener('show.bs.modal', function (e) {
        this.getElementsByClassName('modal-body')[0].innerHTML = value.category;
        this.getElementsByClassName('modal-header')[0].innerHTML = value.error;;
    });
}

