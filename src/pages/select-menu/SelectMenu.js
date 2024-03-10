import MetaHeader from "../../components/MetaHeader";
import { useEffect, useState } from 'react';

const SelectMenu = () => {
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
            <div className="flex border h-full bg-pos-primary">
                <div className="flex-none w-1/5 h-full max-h-full">
                    {/* NavBar */}
                </div>
                <div className="flex flex-col items-center py-10 w-4/5 h-full max-h-full bg-[#FFFFFF]">
                    <div className="text-3xl text-[#000000]"> รายการสินค้า </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> รายการ </th>
                                    <th> ราคา </th>
                                    <th className="flex flex-col items-center" > จำนวน </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataMenu.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.price}</td>
                                        <td>
                                            <div>
                                                <div className="btn btn-bordered border-pos-success bg-pos-success mx-2" onClick={() => handleInputChange({ target: { value: value.count - 1 } }, index)}> - </div>
                                                <input
                                                    type="text"
                                                    value={value.count}
                                                    readOnly
                                                    className="input input-bordered border-[#bababa] bg-[#FFFFFF] w-14 h-10"
                                                />
                                                <div className="btn btn-bordered border-pos-error bg-pos-error mx-2" onClick={() => handleInputChange({ target: { value: value.count + 1 } }, index)}> + </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectMenu;
