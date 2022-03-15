import React from 'react'
import {FlatList} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CatGridItem from '../components/CatGridItem';


const Categories = (props) => {

    const renderItem = (itemData)=>{
          return <CatGridItem title={itemData.item.title} color={itemData.item.color}
                    onSelect={()=>{
                        props.navigation.navigate({name:"meals", params:{
                            category_id:itemData.item.id,
                            category_title:itemData.item.title,
                            category_color:itemData.item.color,
                        }})
                    }}
                />
    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    )
};
export default Categories;