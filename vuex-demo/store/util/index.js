import moment from 'moment'
export const formatterDate = (row, column)=>{
    return moment(row.createdAt).format('YYYY-MM-DD HH-mm-ss')
}