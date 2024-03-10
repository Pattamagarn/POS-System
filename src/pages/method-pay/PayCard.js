import MetaHeader from "../../components/MetaHeader/MetaHeader"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import * as Scanning from '../../components/scanning/Scanning.json'
// import Lottie from "react-lottie"
import axios from 'axios'
import { useState, useEffect } from "react"


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Scanning.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const PayCard = ({ point }) => {

    const navigate = useNavigate()
    // const [user,setUser] = useState([])

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API}/retrieveDataNisit`)
    //     .then((response) => {
    //         if(response.status){
    //             // setUser(response.data)
    //             // console.log(response.data)
    //         }
    //     })
    // },[])
    const totalPrice = 1
    const user = [
        {

            "id": "6430300854",
            "name": "ปัฐมกาญจน์ โอสถ",
            "cash": "1000.00",
            "point": "150"
        },
        {

            "id": "6430300579",
            "name": "ปัฐมกาญจน์ โอสถ",
            "cash": "1000.00",
            "point": "150"
        },
        {
            "id": "6430300595",
            "name": "พงศธร อนุชิตดัสกร",
            "cash": "1000.00",
            "point": "150"
        },
    ]
    const idCard = "6430300579"
    const [scan, setScan] = useState(false)
    const [success, setSuccess] = useState(false)
    const [money, setMoney] = useState(125)



    const handleNoUser = () => {
        Swal.fire({
            title: 'ไม่พบรายชื่อสมาชิก',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3FC3EE',
            cancelButtonColor: '#F27474',
            confirmButtonText: 'ตกลง',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            }

        })
    }
    const handleHaveUser = () => {
        Swal.fire({
            title: 'รายชื่อสมาชิกถูกต้อง',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3FC3EE',

            cancelButtonColor: '#F27474',
            confirmButtonText: 'ตกลง',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            }

        })
    }

    const handleBack = () => {
        navigate('/')

    }

    const handlePayMent = () => {
    //     axios.post(`${process.env.REACT_APP_API}/updateDataNisit`,{
    //         cash : totalPrice
    //     })
    //     .then((response) => {
    //         if(response.status) {
    //             if(response.data === "Not enough money"){
    //                 Swal.fire({
    //                     title: 'ยอดเงินของคุณไม่พอ',
    //                     icon: 'error',
    //                     showCancelButton: false,
    //                     confirmButtonColor: '#3FC3EE',
            
    //                     cancelButtonColor: '#F27474',
    //                     confirmButtonText: 'ตกลง',
    //                 })
    //                 .then((result) => {
    //                     if (result.isConfirmed) {
    //                         navigate('/')
    //                     }
            
    //                 })
    //             }
    //             else{
    //                 setUser(response.data)
    //             }
    //         }
    //     })
    //     .catch((error) => {})
    }
    // console.log(user)
    return (
        <div>
            <MetaHeader title='Pay By Card' />
            <div className="flex items-center justify-center w-full h-screen py-16 align-middle bg-pos-primary">
                <div className="flex flex-col items-center w-full h-full mx-20 rounded-box bg-pos-white">
                    {user.map((value) => (
                        <div className="flex flex-col items-center w-full h-full py-3 ">
                            <div className="flex justify-between w-[30rem] ">
                                <span className="text-3xl text-pos-primary">รหัสนิสิต</span>
                                <span className="text-3xl text-pos-primary">{value.studentID}</span>
                            </div>
                            <div className="flex justify-between w-[30rem] ">
                                <span className="text-3xl text-pos-primary">ชื่อ-นามสกุล</span>
                                <span className="text-3xl text-pos-primary">{value.firstname} {value.lastname}</span>
                            </div>
                            <div className='h-1 mx-10 my-3 border-none divider bg-pos-primary' />
                            <div className="flex justify-between w-full px-40 py-2 mt-5">
                                <span className="text-2xl text-pos-primary">จำนวนเงิน</span>
                                <span className="text-2xl text-pos-primary">{value.cash} บาท</span>
                            </div>
                            <div className="flex justify-between w-full px-40 ">
                                <span className="text-2xl text-pos-primary">จำนวนแต้ม</span>
                                <span className="text-2xl text-pos-primary">{value.point} คะแนน</span>
                            </div>
                            <div className="flex justify-end w-full px-40 pt-3">
                                <button className="btn bg-pos-success w-[150px] hover:bg-pos-success/80" onClick={handlePayMent}>ยืนยัน</button>
                            </div>
                            <div className='h-1 mx-10 my-5 border-none divider bg-pos-primary' />
                            <div className="flex justify-between w-full px-40 py-2">
                                <span className="text-2xl text-pos-primary">ยอดรวมสุทธิ</span>
                                <span className="text-2xl text-pos-primary">{totalPrice} บาท</span>
                            </div>
                            <div className="flex justify-between w-full px-40 ">
                                <span className="text-2xl text-pos-primary">ได้รับแต้ม</span>
                                <span className="text-2xl text-pos-primary">{point} คะแนน</span>
                            </div>
                            <div className="flex justify-between w-full px-40 py-2">
                                <span className="text-2xl text-pos-primary">ยอดเงินคงเหลือ</span>
                                <span className="text-2xl text-pos-primary">{value.cash} บาท</span>
                            </div>
                            <div className="flex justify-between w-full px-40 ">
                                <span className="text-2xl text-pos-primary">แต้มสะสมคงเหลือ</span>
                                <span className="text-2xl text-pos-primary">{value.point} คะแนน</span>
                            </div>

                        </div>
                    ))}
                    <div className="flex justify-center ">
                        <button className="btn w-[150px] bg-pos-error hover:bg-pos-error/80" onClick={handleBack} >ย้อนกลับ</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PayCard