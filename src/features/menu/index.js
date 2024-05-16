import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FoodCard from './components/FoodCard';
import { showNotification } from '../common/headerSlice';

const INITIAL_INTEGRATION_LIST = [
    {
        name: 'Sườn xào chua ngọt',
        icon: 'https://tse2.mm.bing.net/th?id=OIP.Gnd9VYIwTF5ly-wt-WMOCwHaFw&pid=Api',
        isActive: true,
        price: 80000,
        type: 'Thịt',
        description:
            'Sườn giòn xốp đậm đà bên ngoài, bên trong vẫn giữ độ ẩm mềm, sốt chua ngọt kích thích vị giác.',
    },
    {
        name: 'Cơm trắng',
        icon: 'https://tse1.mm.bing.net/th?id=OIP.oKl2OPO8Ump4FDyMMSZojgHaE8&pid=Api',
        isActive: true,
        price: 25000,
        type: 'Cơm',
        description:
            'Cơm trắng được làm từ gạo tẻ nấu chín, có màu trắng ngà, mềm dẻo và có vị hơi ngọt.',
    },
    {
        name: 'Canh cua',
        icon: 'http://baoquangngai.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/052023/canh_20230522092215.jpg',
        isActive: true,
        price: 25000,
        type: 'Canh',
        description:
            'Canh cua là một món ăn giản dị, mộc mạc đã quá quen thuộc với mọi người Việt Nam. Canh cua chứa rất nhiều dưỡng chất đặc biệt là canxi rất tốt cho sức khỏe.',
    },
    {
        name: 'Xôi chim',
        icon: 'https://cdn.tgdd.vn/Files/2021/05/27/1355184/cach-nau-xoi-chim-bo-cau-thom-ngon-bo-duong-tai-nha-202208271901132481.jpg',
        isActive: true,
        price: 125000,
        type: 'Xôi',
        description:
            'Ngoài xôi gà đủ các loại topping hấp dẫn thì xôi bồ câu nghe tên lạ, cách làm cũng lạ nhưng hương vị không thua gì các món xôi mặn khác mà nó còn rất bổ dưỡng nữa.',
    },
    {
        name: 'Bia tuơi',
        icon: 'http://vintagewine.vn/wp-content/uploads/2023/02/bia-tuoi-la-gi-1.png',
        isActive: true,
        price: 20000,
        type: 'Đồ nhậu',
        description:
            'Bia tươi là một loại đồ uống có nguồn gốc từ các nước phương Tây, được sản xuất và tiêu thụ ngay tại các quán bia, thay vì được đóng chai hay lon như các loại bia công nghiệp khác.',
    },
    {
        name: 'Lạc rang húng lìu',
        icon: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/004/714/products/lac-rang-hung-liu-ba-van-500g-4.png?v=1642814602110',
        isActive: true,
        price: 20000,
        type: 'Đồ nhậu',
        description:
            'Bia tươi là một loại đồ uống có nguồn gốc từ các nước phương Tây, được sản xuất và tiêu thụ ngay tại các quán bia, thay vì được đóng chai hay lon như các loại bia công nghiệp khác.',
    },
    {
        name: 'Cơm rang dưa bò',
        icon: 'https://img-global.cpcdn.com/recipes/9b5129d0c9e41377/680x482cq70/c%C6%A1m-rang-d%C6%B0a-bo-recipe-main-photo.jpg',
        isActive: true,
        price: 40000,
        type: 'Cơm',
        description:
            'Hạt cơm vàng ươm, quyện với thịt bò mềm ngọt tự nhiên, dưa cải chua nhẹ làm nên món ăn trứ danh của Hà thành một thời.',
    },
    {
        name: 'Cơm gà',
        icon: 'https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg',
        isActive: true,
        price: 40000,
        type: 'Cơm',
        description:
            'Cơm gà nóng hổi, thơm lừng với hạt cơm bóng, mẩy lại còn vàng ươm, dẻo bùi kết hợp với thịt gà mềm, ngọt, béo ngậy rất hấp dẫn.',
    },
];

const temp = {
    name: 'Tên món',
    icon: 'https://image.pngaaa.com/892/2528892-middle.png',
    isActive: false,
    price: 0,
    type: '...',
    description: 'Thêm mô tả',
};

function NewFoodCard() {
    const [newFood, setNewFood] = useState(temp);

    return (
        <FoodCard
            key={0}
            title={newFood.name}
            topMargin={'mt-2'}
            TopSideButtons={
                <div className="text-base">
                    {newFood.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                </div>
            }
        >
            <p className="gap-3 sm:flex">
                <img
                    alt="icon"
                    src={newFood.icon}
                    className="mr-4 inline-block cursor-pointer rounded sm:h-40 sm:w-40"
                />
                <span>
                    <textarea
                        placeholder={newFood.description}
                        className="!min-h-[120px] w-full resize-none focus:outline-none"
                    ></textarea>
                    <div className="pt-2 text-sm text-gray-700">
                        Loại món:{' '}
                        <input
                            defaultValue={newFood.type}
                            type="text"
                            className="focus:outline-none"
                        ></input>
                    </div>
                </span>
            </p>
        </FoodCard>
    );
}

function Menu() {
    const dispatch = useDispatch();

    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST);
    const [newCards, setNewCard] = useState(0);

    const addNewFoodCard = () => {
        setNewCard(newCards + 1);
    };

    const updateIntegrationStatus = index => {
        let integration = integrationList[index];
        setIntegrationList(
            integrationList.map((i, k) => {
                if (k === index) return { ...i, isActive: !i.isActive };
                return i;
            }),
        );
        dispatch(
            showNotification({
                message: `${integration.name} ${integration.isActive ? 'disabled' : 'enabled'}`,
                status: 1,
            }),
        );
    };

    return (
        <div id="menu" className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {integrationList.map((i, k) => {
                return (
                    <FoodCard
                        key={k}
                        title={i.name}
                        topMargin={'mt-2'}
                        price={i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        isActive={true}
                    >
                        <p className="gap-3 sm:flex">
                            <img
                                alt="icon"
                                src={i.icon}
                                className="mr-4 inline-block rounded sm:h-40 sm:w-40"
                            />
                            <span className="w-full">
                                <textarea
                                    placeholder="Thêm mô tả"
                                    defaultValue={i.description}
                                    spellCheck="false"
                                    className="!min-h-[120px] w-full resize-none focus:outline-none"
                                ></textarea>
                                <div className="pt-2 text-sm text-gray-700">
                                    Loại món:{' '}
                                    <input
                                        defaultValue={i.type}
                                        type="text"
                                        className="focus:outline-none"
                                    ></input>
                                </div>
                            </span>
                        </p>
                    </FoodCard>
                );
            })}

            {Array(newCards)
                .fill(0)
                .map((_, i) => (
                    <NewFoodCard />
                ))}

            <div className="absolute bottom-0 right-6 mb-3">
                <button
                    className="btn btn-primary btn-sm px-6 normal-case"
                    onClick={() => addNewFoodCard()}
                >
                    Thêm món mới
                </button>
            </div>
        </div>
    );
}

export default Menu;
