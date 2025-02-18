import { useDispatch } from 'react-redux'
import { removeUserFromServer } from '../../Redux/store/users'
import swal from "sweetalert"

export default function UserItem({ _id, firstname, lastname, email }) {

  const dispatch = useDispatch()

  const removeHandler = () => {

    swal({
      title: "آیا از حذف مطمئن هستید؟",
      icon: "warning",
      buttons: ["خیر", "بله"]
    }).then((result) => {

      if (result){
        dispatch(removeUserFromServer(_id))
        
        swal({
          title: 'کاربر مورد نظر با موفقیت حذف شد',
          icon: 'success',
        })
      }
        
    })

  }

  return (
    <div className="uesrs__item">
      <div className="users__info">
        <img
          src="../../img/admin/profile/banana.png"
          alt="photo user"
          className="users__img"
        />
        <div className="users__details">
          <p className="users__name my-0">{firstname}  {lastname}</p>
          <p lang="en" className="users__email">
            {email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button className="btn-custome btn-custome__red" onClick={removeHandler}>حذف</button>
      </div>
    </div>
  )
}
