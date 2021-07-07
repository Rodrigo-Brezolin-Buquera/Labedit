import React from 'react'
import Button from '@material-ui/core/Button';
import {FlexDiv} from "./styled"

const PagesList = ({SetPage, page, posts}) => {

    const selectPage = (num) => {
        SetPage(page+num)
    }

    return (
        <FlexDiv>
            
           {page !== 1 ?
            <Button variant={"contained"} color={"primary"} onClick={()=>selectPage(-1)} > Página anterior</Button> 
            : 
            ""  }

           { posts.length === 50 ? 
           <Button variant={"contained"} color={"primary"} onClick={()=>selectPage(1)}> Próxima página </Button> :
            "" }
          
        </FlexDiv>
    )
}

export default PagesList

