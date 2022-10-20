

function chooseDrink(id){
    let path = ''

    if(id=="milk"){
        path = 'assets/milkShake.json'
    }
    else if(id=="matcha"){
        path = 'assets/matchaShake.json'
    }
    else if(id=="taro"){
        path = 'assets/taroShake.json'
    }else{//berry
        path = 'assets/berryShake.json'

    }
    return path
}



let animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: chooseDrink(localStorage.getItem('selectedFlavour'))
})

