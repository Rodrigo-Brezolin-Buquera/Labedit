import React from 'react'
import { FilterContainer, Form, Input } from "./styled"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const FilterForm = ({ form, onChange, cleanFields }) => {
    
    return (
        <FilterContainer>
            <Typography variant="h6" component="h2"> Procure por um post: </Typography>
            <Form >               
                    <Input
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        placeholder="Título"
                        size="30"
                    >
                    </Input>

                    <Input
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        placeholder="Texto"
                        size="30"
                    >
                    </Input>

                    <Button variant={"contained"} color={"primary"} onClick={cleanFields}>Limpar</Button>                          
            </Form>
        </FilterContainer>
    )
}

export default FilterForm
