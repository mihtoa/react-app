import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 8 8'>
        <input id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description} onKeyUp={keyHandler} />
      </Grid>
      <Grid cols='12 4 4'>
        <IconButton style='info' icon='search' onClick={props.handleSearch} /> 
        <IconButton style='default' icon='minus-circle' span='Limpar ' onClick={props.handleClear} />
        <IconButton style='primary' icon='plus' span='Adicionar ' onClick={props.handleAdd} />
      </Grid>
    </div>
  )
}