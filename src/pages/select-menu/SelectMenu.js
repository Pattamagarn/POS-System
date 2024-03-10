import MetaHeader from '../../components/MetaHeader/MetaHeader';
import { useEffect, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";

const SelectMenu = () => {

    const navigate = useNavigate()
    const menu = [
        {
            "name": "ข้าวผัดกุ้ง",
            "price": "50"
        },
        {
            "name": "ข้าวขาหมู",
            "price": "40"
        },
        {
            "name": "ข้าวมันไก่",
            "price": "40"
        },
        {
            "name": "กระเพราหมูกรอบ",
            "price": "50"
        },
        {
            "name": "กระเพราทะเล",
            "price": "50"
        },
        {
            "name": "กระเพราหมู",
            "price": "50"
        },
        {
            "name": "คะน้าหมูกรอบ",
            "price": "50"
        },
        {
            "name": "หมูทอดกระเทียม",
            "price": "40"
        },
        {
            "name": "ไก่ทอดกระเทียม",
            "price": "40"
        }
    ];

    const [dataMenu, setDataMenu] = useState([]);

    useEffect(() => {
        setDataMenu(menu.map((value, index) => {
            return { ...value, index: index + 1, count: 0 };
        }));
    }, []);

    const handleInputChange = (event, index) => {
        let { value } = event.target;
        value = parseInt(value) >= 0 ? parseInt(value) : 0;
        setDataMenu(prevData => {
            const newData = [...prevData];
            newData[index].count = value;
            return newData;
        });
    };


    return (
        <div>
            <MetaHeader title='SelectMenu' />
            <div className="flex h-full border bg-pos-primary">
                <div className="flex-none w-1/5 h-full max-h-full">
                    <div className="flex justify-center mt-10 avatar">
                        <div className="w-48 rounded-full">
                            <img src={require('../../image/logo2.jpg')} />
                        </div>
                    </div>
                    <div className="flex justify-center mt-10 bg-pos-secondary">
                        <div className="text-2xl text-[#000000] py-3">
                            รายการสินค้า
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-10 w-4/5 h-full max-h-full bg-[#FFFFFF]">
                    <div className="text-3xl text-[#000000]"> รายการสินค้า </div>
                    <div className="flex w-full max-w-3xl">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-[#000000]"> รายการ </th>
                                    <th className="text-[#000000]"> ราคา </th>
                                    <th className="flex justify-end mr-16 text-[#000000]" > จำนวน </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataMenu.map((value, index) => (
                                    <tr key={index}>
                                        <td className="text-[#000000]">{value.name}</td>
                                        <td className="text-[#000000]">{value.price}</td>
                                        <td className="flex justify-end">
                                            <div>
                                                <div className="btn btn-bordered hover:bg-pos-success/80 border-none bg-pos-success mx-2 text-[#000000]" onClick={() => handleInputChange({ target: { value: value.count - 1 } }, index)}> - </div>
                                                <input
                                                    type="text"
                                                    value={value.count}
                                                    readOnly
                                                    className="input input-bordered border-[#bababa] bg-[#FFFFFF] text-[#000000] w-14 h-10"
                                                />
                                                <div className="btn btn-bordered hover:bg-pos-error/80 border-none bg-pos-error mx-2 text-[#000000] " onClick={() => handleInputChange({ target: { value: value.count + 1 } }, index)}> + </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end w-full gap-4 py-10 px-52">
                        <Link to='/'><div className="btn flex w-24 justify-center bg-pos-error border-none text-[#000000] hover:bg-pos-error/80"> ย้อนกลับ </div></Link>
                        <Link to='/receipt'><div className="btn flex w-24 justify-center bg-pos-success border-none text-[#000000] hover:bg-pos-success/80"> ยืนยัน </div></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SelectMenu;
