const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const srcImg = "./assets/images/slideshow/"
const arrowLeft  = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const img = document.querySelector(".banner-img")
const tagline = document.querySelector("#banner p")
const dots = document.querySelector(".dots")
let slideIndex = 0


// Création des dots en fonction du nombre de slides //
for (let i=0; i<slides.length; i++) {
	
	const div = document.createElement("div")
	div.className = "dot"
	div.dataset.index = i
	dots.appendChild(div)

// Intégration du click des dots directement dans la boucle de création des dots
	div.addEventListener ('click', () => {
		slideIndex = div.dataset.index
		majSlider(slideIndex) })
}

const dot = document.querySelectorAll(".dot")



function majSlider (index) {

	slidesData = slides[index]
	img.src = srcImg + slidesData.image
	tagline.innerHTML = slidesData.tagLine
	dot.forEach(element => {
	element.classList.remove('dot_selected')   
	if (element.dataset.index == slideIndex) {
		element.classList.add('dot_selected') 
	}
})

}

majSlider(slideIndex)


// Écoute du clique sur la flèche de gauche //
arrowLeft.addEventListener ('click', () => {
	
	slideIndex--
	if (slideIndex < 0){
		slideIndex = slides.length -1
	}

	majSlider(slideIndex)
	
})

// Écoute du clique sur la flèche de droite //
arrowRight.addEventListener ('click', () => {
	
	slideIndex++
	if (slideIndex >= slides.length){
		slideIndex = 0
	}

	majSlider(slideIndex)
	
})


