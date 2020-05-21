
import React from 'react';
import "./index.css";





class ReactTable extends React.Component{

//生成表格
    getTable=()=>{

        const {columns} = this.props;
        const {dataSource} = this.props;
        return(
            <table class="rc-table">
                {this.getHeadTable(columns)}
                {this.getBodyTable(columns,dataSource)}
            </table>
        )
    }

    //生成表头
    getHeadTable=(columns)=>{

        return(
            <thead>
                 <tr>

                     {columns &&Array.isArray(columns)&& columns.map((item)=>{
                         return (
                             <th key= {item.key} class = "rc-table-thead-th">
                                 {item.title}
                             </th>
                         )
                     })}
                        
                 </tr>
        </thead>
        )
    }

    //生成表体
    getBodyTable = (columns,dataSource) => {

        return (
            <tbody>
                {  dataSource && dataSource.length>0 && dataSource.map((item)=>{
                    return (
                        <tr class ="rt-table-tbody-td">
                            {columns.map((colItem)=>{
                            return ( <td>{item[colItem.dataIndex]}</td>)     
                            })}
                        </tr>
                    )
                })
                }
               
            </tbody>
        )
    }
    
    render(){

        return this.getTable();
    }
}

export default ReactTable;