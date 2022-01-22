import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {productRows} from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import './productList.css';



export default function ProductList() {

    const [data,setData]=useState(productRows);

    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id));
    }


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 150,
          renderCell:(params) =>{
            return(
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
          },
        },

        {
          field: "stock",
          headerName: "Stock",
          description: "This column has a value getter and is not sortable.",
          sortable: false,
          width: 160,
        
        },
        {
            field: "price",
            headerName: "Price",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
          
        },
        {
            field: "status",
            headerName: "Status",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
          
        },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/product/"+params.row.id}>
                    <button className="productListEdit">
                       Edit
                   </button>
                    </Link>
                   
                   <DeleteOutline className="productListEditDelete" onClick={()=>handleDelete(params.row.id)}/>
                   </>
                )
            }
          
        },
       
      ];

    return (
        <div className="productList">
             <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}