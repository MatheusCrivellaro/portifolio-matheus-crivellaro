import logo_escuro from "../images/Ativo 1.png"
import insights_image_1 from "../images/pexels-luis-gomes-166706-546819.jpg"
import insights_image_2 from "../images/pexels-pavel-danilyuk-5496463.jpg"
import insights_image_3 from "../images/pexels-goumbik-574073.jpg"
import insights_image_4 from "../images/pexels-goumbik-574077.jpg"
import insights_image_5 from "../images/pexels-cookiecutter-1148820.jpg"
import insights_image_6 from "../images/pexels-negativespace-92904.jpg"

const useGetImage = () => {
    const images = [
        {name: "logo-escuro", url: logo_escuro},
        {name: "insights-image-1", url: insights_image_1},
        {name: "insights-image-2", url: insights_image_2},
        {name: "insights-image-3", url: insights_image_3},
        {name: "insights-image-4", url: insights_image_4},
        {name: "insights-image-5", url: insights_image_5},
        {name: "insights-image-6", url: insights_image_6},
    ]

    const getImage = (name: string) => {
        images.forEach(value => {
            if (value.name === name) {
                console.log(value.url)
                return value.url
            }
        })
        return ""
    }

    const getStyleUrl = (name: string) => {
        return "url(" + getImage(name) + ")";
    }

    return {
        getImage,
        getStyleUrl
    }
}

export default useGetImage
