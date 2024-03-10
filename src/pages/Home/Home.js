import { Link } from "react-router-dom"
import burger from '../../image/burger.png'
import spaghetti from '../../image/Spaghetti.png'
import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate()
    const shop = [
        {
            "name": "Shopfood",
            "photo": "https://media.discordapp.net/attachments/880028032365125672/1216435564837081118/food.png?ex=660060e6&is=65edebe6&hm=a4845894411e562b12fd4eed497345d44486af1da70ea828c8b64e8c35a6003e&=&format=webp&quality=lossless",
            "route": "/shopfood"
        },
        {
            "name": "Shopdrink",
            "photo": "https://media.discordapp.net/attachments/880028032365125672/1216435564467978351/drink.png?ex=660060e6&is=65edebe6&hm=1de3d3a297f95dd2511f5c961c88f7c2461c094194b46920203add9022ef5436&=&format=webp&quality=lossless",
            "route": "/shopdrink"
        }
    ]

    const handleStore = () => {
        navigate('/select-menu')
    }
    return (
        <div className="h-screen bg-pos-primary text-white ">
            <div className="flex justify-center items-center shadow-inner rounded-box mx-40 h-full bg-pos-secondary" >
                <div className=" grid grid-rows-1 grid-flow-col gap-10 " >
                    {shop.map((item, index) => (
                        <div className="flex-col">
                            <img src={item.photo} alt={item.name} className="btn-ghost w-48 h-48" onClick={handleStore} />
                            <span className="flex text-[#000000] justify-center mt-5">{item.name}</span>
                        </div>


                    ))}
                </div>
            </div>
        </div>

    )
}
export default Home