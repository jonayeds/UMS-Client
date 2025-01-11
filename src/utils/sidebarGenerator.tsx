import { NavLink } from "react-router-dom"
import { TSideBarItem } from "../types"
import { TUserPath } from "../types/routes.types"
export const sideBarGenerator = (items:TUserPath[], role:string)=>{
    const sidebarItems = items.reduce((acc:TSideBarItem[],item)=>{
    
        if(item.path && item.name){
            acc.push({
                key:item.path,
                label:<NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
        if(item.children){
            acc.push({
                key:item.name,
                label:item.name,
                children:item.children.map(child=>({
                    key:child.path,
                    label:<NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                })) as TSideBarItem[]
            })
        }
        return acc
    },[])
    return sidebarItems
}


