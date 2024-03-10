import { Link } from "react-router-dom"
import 'animate.css';
import burger from '../../image/burger.png'
import spaghetti from '../../image/spaghetti.png'


const Home = () =>{
    const shop = [
        {
            "name":"Shopfood",
            "photo":"https://media.discordapp.net/attachments/880028032365125672/1216435564837081118/food.png?ex=660060e6&is=65edebe6&hm=a4845894411e562b12fd4eed497345d44486af1da70ea828c8b64e8c35a6003e&=&format=webp&quality=lossless",
            "route": "/shopfood"
        },
        {
            "name":"Shopdrink",
            "photo":"https://media.discordapp.net/attachments/880028032365125672/1216435564467978351/drink.png?ex=660060e6&is=65edebe6&hm=1de3d3a297f95dd2511f5c961c88f7c2461c094194b46920203add9022ef5436&=&format=webp&quality=lossless",
            "route": "/shopdrink"
        }
    ]

    return(
        <div className="h-screen bg-pos-primary text-white">
            <div className="flex justify-center items-center h-full">
                {shop.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center mt-20">
                        <img src={item.photo} alt={item.name} className="w-48 h-48" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
       
    )
}
export default Home