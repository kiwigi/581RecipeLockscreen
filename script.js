

function chooseDrink(id){
    let path = ''
    let strawPath = ''

    if(id=="milk"){
        path = 'assets/milkShake.json'
        strawPath = 'assets/milkStraw.json'
    }
    else if(id=="matcha"){
        path = 'assets/matchaShake.json'
        strawPath = 'assets/matchaStraw.json'
    }
    else if(id=="taro"){
        path = 'assets/taroShake.json'
        strawPath = 'assets/taroStraw.json'

    }else{//berry
        path = 'assets/berryShake.json'
        strawPath = 'assets/berryStraw.json'


    }
    return [path, strawPath]
}




let animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: chooseDrink(localStorage.getItem('selectedFlavour'))[0]
})

let strawAnimation = bodymovin.loadAnimation({
    container: document.getElementById('strawAnimation'),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: chooseDrink(localStorage.getItem('selectedFlavour'))[1]
})
