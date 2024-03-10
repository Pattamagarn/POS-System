import MetaHeader from "../../components/MetaHeader"


const Receipt = () => {

    const current = new Date()
    let date = current.getDate()
    let month = current.getMonth() + 1
    const year = current.getFullYear()
    let hours = current.getHours()
    let minute = current.getMinutes()
    let second = current.getSeconds()
    const idShop = 123
    let idSale = 1
    const menu = [{
        "food": "ข้าวผัดกุ้ง",
        "cost": "50"
    },
    {
        "food": "ข้าวขาหมู",
        "cost": "40"
    },
    {
        "food": "ข้าวมันไก่",
        "cost": "40"
    }]

    if (date < 10) date = '0' + date
    if (month < 10) month = '0' + month
    if (hours < 10) hours = '0' + hours
    if (minute < 10) minute = '0' + minute
    if (second < 10) second = '0' + second
    if (idSale < 10) idSale = '0' + idSale
    const dmy = date + '/' + month + '/' + year
    const time = hours + ':' + minute + ':' + second

    return (
        <div>
            <MetaHeader title='Receipt' />
            <div className="flex flex-col items-center py-10 ">
                <div className="flex justify-between w-96 ">
                    <span className="text-3xl text-pos-primary">รหัสร้าน {idShop}</span>
                    <span className="text-3xl text-pos-primary"> เลขที่ #{idSale}</span>
                </div>
                <div className="flex justify-between w-[28rem] ">
                    <span className="text-3xl text-pos-primary">วันที่/เวลา</span>
                    <span className="text-3xl text-pos-primary">{dmy}</span>
                    <span className="text-3xl text-pos-primary">{time}</span>

                </div>
            </div>
            <div className='h-2 mx-10 my-3 border-none divider bg-pos-primary' />
            <div className="flex justify-between w-full px-20">
                <span className="text-3xl text-pos-primary">รายการ</span>
                <span className="text-3xl text-pos-primary">จำนวน</span>
                <span className="text-3xl text-pos-primary">ราคา</span>
            </div>
            <div className='h-2 mx-10 my-3 border-none divider bg-pos-primary' />
            <div>
                {menu.map((value) => (
                    <div>
                        <div className="flex justify-between w-full px-20">
                            <p className="text-2xl">{value.food}</p>
                            <p className="text-2xl">{value.cost}</p>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Receipt