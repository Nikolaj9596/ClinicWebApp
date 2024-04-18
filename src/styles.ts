
export const tableStyles = {
  maxWidth: "calc(100% - 150px)",
  marginLeft: "150px",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
  borderRadius: "10px",
  overflow: "hidden"
}

export const listItemStyles = {
  color: 'rgba(255, 255, 255, 0.87)',
  borderRadius: 1.5,
  marginBottom: 0.5,
  '&.active': {
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#328BED',
  },
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#35373b', // Цвет при наведении
  },
} 
