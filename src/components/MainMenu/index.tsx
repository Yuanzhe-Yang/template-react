import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, theme } from 'antd';


const label:string[] =["User", "Action", "Device"]
const labelSelection: number[] = [2,3,2]

const items2: MenuProps['items'] = [LaptopOutlined, NotificationOutlined, UserOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `/${label[key-1]}`,
            icon: React.createElement(icon),
            label: `${label[key-1]}`,
            children: new Array(labelSelection[key-1]).fill(null).map((_, j) => {
                const subKey =index *  ((key-2<0) ? 0 : labelSelection[key-2]) + j + 1;
                return {
                    key: `/${label[key-1]}/${subKey}`,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const MainMenu: React.FC = () => {

    const navigateTo = useNavigate()
    // defaultSelectKeys 中输入对应的路径
    const path = useLocation()

    //
    const firstOpenKey:string = 'sub1';


    const [openKeys, setOpenKeys] = useState([firstOpenKey]);

    function findKey(obj:{key:string}){
        return obj.key === path.pathname
    }
    const getNewKey = ():string[]=>{
        for(let i = 0; i < items2.length; i++){
            if (items2[i]['children'] && items2[i]['children'].length > 1 && items2[i]['children'].find(findKey) ){
                return [`${items2[i].key}`]
            }
        }
    }

    useEffect(() => {
        let newKeys = ['sub1']
        const one = getNewKey()
        if(one){
            newKeys = ['sub1', `${one}`]
        } ;
        setOpenKeys(newKeys);
    }, [path.pathname]); // 第二个参数 表示仅在变化时时执行一次


    useEffect(() => {
        console.log(openKeys)
    }, [openKeys]); // 第二个参数 表示仅在变化时时执行一次


    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const hdClick =(e:{key:string})=>{
        navigateTo(e.key)
    }

    const hdOpenChange =(openKeys:string[])=>{
        const one = openKeys[openKeys.length - 1];
        openKeys.splice(1,openKeys.length-1)
        openKeys.push(one);
        console.log(openKeys)
    }

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={path.pathname}
            defaultOpenKeys={ openKeys }
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={hdClick}
            onOpenChange={hdOpenChange}
        />
    );
};

export default MainMenu;
