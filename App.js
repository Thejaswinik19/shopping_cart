//App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{ id: 1, 
		name: 'T-shirt', 
		price: 499, 
		image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYZFRgYGhgaGRgYGBgZGhocGRgcHxgZHBwcIS4lHB4rIRgYJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHjEsISExNzE0MTE1MTE0NDQ/NDQ0NDQ0NDQxMTQ0NDU0NDQxNDQ0Nj8xNDQxNDQ0MTE0NDQxMf/AABEIAM4A9QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xABGEAACAQIDBAcEBQkFCQAAAAABAgADEQQSIQUxQVEGBxMiYXGBMpGhsVJykrLBFDNCYoKi0fDxI4OzwuEVFiQ1Q0RUY3P/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQEBAAIBAwMCBgMBAAAAAAAAAQIRAxIhMQRBUZGhBTJhcYGxExQVIv/aAAwDAQACEQMRAD8AmaIiAiIgIiICIiAiIgIieEwPZZxBXKcxAB0NzYa6W9b29ZHnSzrVw+GJp4YDE1RcFgbUlPiw9s+C6eIkNdI+lGJxz5sRULD9FBpTX6qjS/ibnxk6E5J0io02NNnVCCQC/dDi5ysrHQ3t6G4MtYzphhwLdoGP0UBdifTdIo2d0oDqtPEHUaZzqG+sODePHjOx2TgkYBlysp3MpBB8iJz5Szy68bLOy7WxeJxLHIppJ598jxtoD5TebE2GE1IF+fzJJ3nxl/Brl0A0m6w50lE702ew0y0gvIv6XckfAibGR9022+2EogUqhp1qhASwViFVgXcq4ItYZbkb3mDsDrMOi4uncca1IH3tS1PqpNydFE6sMcssd6cmepklCJg7N2hSxFMVKLrUU6ZlN7EbwRvDDkdRM6EEREBERAREQEREBERAREQEREBERAREQETyR3076xFwrNh8MBVrjR2OqUjyIGruPojQX15RJsdX0i6R4fBU89d8t75UXV3I4KvHz0A4kSDumPT/ABOOzU1JoYc6dmp1cf8AsYe19UWHnvnO43G1MQ7VartVdt7ubnyH0QPoiwHKUpTmmOCu2vNOUNTm07GeGiJfpNtVkMz9l42tRbNSd0J4oxW/mNx9RMhaA5TISmOUTjOpu8P01x6i3aK3i9GmT71US83TfaBFhWC+KUaSn0upmjAnoEmcOPwdeXyuVKj1HL1Hao7b3dmdjyuTwFzpuEqvKVEqmkknhnbtk4HH1aD56NR6T/SQ2vbcGU91xqdGBEkDo91mG4TGIAN3bUwbDxdNSOGq33+yBI2gmRlhMvKZlY+kcLiUqIr03V0YXVlYMpHMEaGX584bO2nWw7Z8PVeiSbnKe6x5sh7rbragyeOjG1vyvDU69grMCHUG4DoxVwPDMpt4WnPnhcV5dtxERKLEREBERAREQEREBERAREQEREDkusTpP+QYUupHbVD2dIHgxGr24hRr55Rxnzmrkkkkkkkkk3JJ1JJ4knjJV6xWTEY1kcZloqqKMzCxYB3YZSNTmUH6gnHYroq4Q1KJzqvtI1g4+qRo/lo3IGZ4+o45l026q94sunqaINx4/PwP8d4+EyaTBhcceHEcwZiobfiOIPLzntF8rleBF/4/KdkrFmlZ5aVKZ6RLoeAStZSBKgJI9EqnglSyRWs9lIM9vCtezwxeewhRJX6n8YWo4ikTfJVDjwFVd32qbH9qRO53ySepk9/GeWH+df8An+kz5fC+PlKkRE5mhERAREQEREBERAREQEREBPJ7KHawJ5An3QIKx9ftMTiHBzA1aveBBFu0YLu3aAaGbTYLB0qp4H5TiaGyC7F6NRqTHvXJJBJsTdh3t/MNNt0a21+T1smKBGa4FRFzqeBJC68R7IvrqvGeVycUy3cLu/Hu7scrJrKa/pdw+y6eJujqS+oV0ID3G4G+jjhZteRE5jauy3o5HvnQtlVwCBci+VlOqNpfKd+tibG3S4PEdnVDqQVzHK6kMpsd6sDY/wCsu9KRYVVpgMmLVWRR+hVWqjVEF92pzA8qjTT0/Nnhl029viqcvHjlNzy49KmsyAZnYbotXJXO9NL7wWLsPRBl/enV4HoJTZQXr1G+oiJ97PPRvreHHzfp3c3+HK+ziBPRJModCcGN6VH8WrOP8PIJm0ui2CQWGGRvrl3++xmV/EuKeJUz0+SJywG8geekU3DeyQ3kbn4SaMPsygnsUKKeKUqan3hbzLVyNxI8jaZ38Untj91p6e+9QumBqt7NGs/1aNRvurMpNhYpt2Fr+tJx94CS6zE7yT6zy0pfxTL2kW/1p8opXo1jDuw1T1KL95xK/wDdjG/+M/26H4VJKonplf8Ap8nxEf62PyhfauzqtDKKtKpTzsFBZDYnfZSNGOnsg3ku9W+zjQpMjCztlapbg7XGS/6qhV81JHtTSdKMfQV6SVXRWQiqim5fPcrTcItyxXv2BBuSPOdF0NouHrVHumdaQSkbE00TPbOQbdoxdiwF7aC5IM1x9VlzWTKa8/z+yLxTCXXd2ERE6WRERAREQEREBERAREQEREBLOLPcf6rfIy9MXaJtSqHkj/dMCBNh6qDzA+Ql5kVaoDoroSpKuoZSL66HS/jOR2Pth6AAAVlOuVgdCbXIYEEXsOY03TeJtylWsDem/AORY+Acae8LPN5PT8mGXVPH6O3Hlxymq2XSLoqaVUNhKhRKqhwjsStydQGN768GBtf2pqq2KrZ6NGvSKMGLBswZWGU3sdR9Hcx3TtsDWNbD9mQe0o3dQd7LbvL527w+rOd6UKQtJ0yg5mBzFip7uh7upOpmeHLcsujOTffv7rdEk3j9GauNVSNZv9m47NYAm3rIzSjWc/n8v1FA9xuDM2hse+jYiuR4Nbz3kyt4MJ5y+1qerK+Il1HA36eenzlqttXDp7deing1VF+Zkd4HorhC13NVvN0HyS/xm/odF8Eu6kW8Xq1T8FcD4SOnhnm2/wAKf+/ifVuK3SzBILnEIw/UV3+KKR8ZranT7C3y01rVm5IiXPozhvhM7C7Kw6G6YeipG49mhYftMCfjNkjEaDujkug+Ejq4Z4lv73R05/MaA9KMQ35rZ2IbTfUzUx7zTt8ZQdo7Vc93DUKI5u6v6XWr/lnRE3lLSP8APjPy4T+e50X3tc+v+1W31sKn1QT86LfMwMDtNv8Av6ankEX3X7Ee+03kw9q4kUqT1TeyIzEDebCwA8yRJnPlbqYzv+ibx4672/VgbPqUMy1ql6uJyqr1OyVRmVQpyWUHL3dDxGthOw6N4oNXdb69mrZeIXMQGPgSG377HlIyPTpUF1w71HP6VWsB6BVQ2HPvTfdVWONTGYhmN3ekhNtwFNrWUcFAZQPLmSZ18HpuTr685qRjycuPT04paiIne5yIiAiIgIiICIiAiIgIiICYW1WAoVSTYCm5JPAZTM2ct1kY/sNm4pxvan2YtzqkJf0zE+kD5roi4HkPlKqtG0pRrTYUrOtjNpNq2rWzds18OwNKoyZTcDRgLcQrAge6bbaW3TXFMOqKwLMzr3A1wBly3KjUX7thu04zUVcIOcxsWlgo5X+Ov4THPhxveyb+WmPJZ7ukwr30BB8iJn0yROECeErCDkJzX0cvv9m09R+iSsG6g5mdFt9J1HzM2tLbuHU97EUh/eIfukyIwo5D3S6hlP8An43zaX1N+Evf72YNf+uG+pTrN8QlpZrdN8Kvs9q/1aYH32WRdTaZF5rh+HcXvapfUZfo76r0/S3cw7sf13RPuh5g1un1Q+zh6a+LVHf4KFnIAzwibT0PDPb7qXmzvu6Kp03xXAUV8qbH7zma/a/SfE1aRR6ncYqrKqU1BsQ4JIXNvQfpcJq3EtYgdwfW/CaT0/Fj3xk3+yt5Mr5qinc96/8AGSh1JYYmviap3JTRB/eOzH/DHvkVqbSUepXadq9ahbSogcG25qRsRfxFT9zxlsvyqzymeIiZLEREBERAREQEREBERAREQEjbrvrsuBpqAbPXXORusqOwB82Cn9mSTOF62dorS2fUT+yZ6uVQlQgtlLDM6JvZl9oH9G1+Fig+faZ4WuZ69Zx4SlUNrrc8NBqPjLgdxwPqp/CaxClKrN4/KWsS5zAE3tL/AGh4op9CD8RKMa+gGULx3W3fGL4FhTLksoZlUwDIg8E9Uys0rSgiSL6GZSHSYKGZVMy+NRVwmLygmeXltoXHljENZR3c2vK9tDrLl5ZxRso3+0N2/cZGXgW0L8EUeYAna9V9esu0KFmUBzURtd6dmzstgLb6aHndBwvOGUXHsOfEsQPkJ0vV6W/2hhVVlQ9rfeDoEYuMoN7soZbn6Q5TO3ss+loiJkkiIgIiICIiAiIgIiICIiAkNdeexnzUsYCCgUUGXS4Yszqdd4IJHhlHOTLOM609lJX2fVZywNAGshX6SgixHEEMR4b+ED5zRhxW/l3T7xvl9cp3K/oxlaJYSrLNpFdrXZm9gjnyZh95ZTjabggMpXS4DAg2bcbn2gbaNuM6HobsxK+Ow9GqW7N2OZRYBsiMwU/qkqAfAmbnrt/5iv8A8KX36kpb30mI6C2lxHtLpp3F5bCRoZtJwwlNWnMZGKmZqVLiaTuMUGZNF549OW10idqMxhLTStH0njCWvdV5KK/snzX5gfjKjKXFwf53G8CwlI8Tf0HzIvOk6FVxSxuFYk27ZBvOnaXp3/fvNEkr7Ur310ZO8p5FdQfeBKa7LPq+JRTa4B5gH3yuYpIiICIiAiIgIiICIiAiIgJj4zDLVR6bjMrqyMOYYEEe4zIiB8rY/CNRqVKLG7UqjoTzKOVv62v6zGJnWdZ+FFLaVfcFqCnUHD2kCn3sjn1mm2X0exWJ/M0HdfpkBE+05Cn0Jm0ymt1XXdjbKx5oV6VcadlUR9OSMCw9VzD1nS9dhvtFCOOHp2+28y8J1WYph/aVKFIEai71G13iyqB+9Oe6yHcYwUXbM2HoYeiz2tnK0w2e362e/rM7lLey3TZO7nsK/AyuqljeYiNYzYU6gIsZpj3VrGLAz1XtLjUOUttTIjwlfV4YzHBlxWk7FxTLmaWwZ7eJVVbT2mhY5QLk6AcydFHmTYestlpcw72ZTyIPuN5Ox22xOretV1rVUoDiqAVX8RoQin1adK3VXhMpBr4k6EXzUQN3Lsvxm56NYrMgIPj6cJ0bHScd5Mq6pxxsMNTyoq3vZVFzvNgBcy/KKe4eQlc0YEREBERAREQEREBERAREQEREDg+snZqWp4kKudWFNnygtkOYqL8g1/tTWdFcYQxQneLjn6TvdvbP7fD1KXFl7p5MuqH7QEibZFVgyncVOo4+II+EyzjfhvslCi9xIR64KAXaGYD26NJj42LJ8kEmbA1Q6gyJ+uijbE4d/pUCp/Zquf8APJ473TzTsjcCXUa0KLys4cmdEjmXErS52gmK1JhwlNzLbqNMliJTLQM9EbSvqZUTLaAy6qS0VU3ldNtZV2MZLRqiU+gWNzKqk7gB7hJDY930kNdA8Vaplv8Azw+cmJG7s4cprKu3C7xjcUtw8h8pXKKR0HkPlK5s5q9iIhBERAREQEREBERAREQEREDyRN0nwn5NjmsLJU/tF5d8nOPtBj4BhJZM4vrK2dnw61wO9RbXnkchWH2sh8gZXKbi2GWqu7DrB00nDddeEJTDVRuV6tNv21Vl+48zujm0CpFj/r4fzym06y8MK2zapAuUKVV8MrAMfsO8zwusnTyTqx2gZdJdWpaWwJUJ1xxshcTKw6ngJii0rUy20aX8q8pSyiURCVakSvtJZi8narI7ae55YE9BjY6boUf+JvfgNPK+smrBVAVuOXCfPWydrthmeomUsAqhXDEE3ve6kHTUWB4g8JJewesWi1DPXVKZGhSnUJffYkJUCgjce67N4DS/JnjbluOrjzmOOqlTZ/5pPqL90TJmi6L7fw+LpD8nqip2YVXFmVlNrDMrAEXym3Ob2XjG+XsREIIiICIiAiIgIiICIiAiIgJgbZwva4erT356bqPMqQPjaZ88gQbsqoRY+RHzkh7OqrVpFHUOrKVcHcyuLMp8wSPWcNtaitCvVpjcrsFGlshJKgW5A29PCbzYm0TlBtuOswvau3DVmkQ9ItjPhMQ9BrkKbox/SQ+ww8xoeRDDhNaJP3SLZFHEqmektVi2VCxylVf2zcC9gDm4WtcFSbmP+kPVnVoU3q0KwrhAWdGUU3yjeVsxD2GttDyudJ0YZyzu5csLja4KeqZXWoshysLHl5G2nPUHUaSgTRmrE9vPBPCw5iSKonqIWF1BYXtcC4uNSL+RHvl1MI5F7AAi/eYDTnYXPA+6SLIMqDTKXBDW7FiOCiw95uefCX6dFVsVAHjqTbz/AIePrOleqO16CbdwVCiaeIorTdyQ1U0zUWpcm2fusyEXtlsVtrZbzP2/0e2ZiKNSrhnpLURHqf8AD1EK9xSwD0b90G1u6FOvoY/SwOnl/pOj6A4fPtLDd6yqzuBvuVpNpv03+O6ZZcfvKtjye1iSerPo2cFhRnZs9fLUemdFpkr7IBGbMFsGuTqvCdpESiSIiAiIgIiICIiAiIgIiICIiAiJj43ECnTeoQSEVmIG8gAmw90D59wuLariMZmJAD1qpVjfsx2rZ2B1Ol6YKgagkjVQDnbL2mqsAtRO9po6tr+yTwBnF1Me7O1a5V8zPmQlSrO97oR7OpG6xtfWXa3SHEm47XLcaslOnTdlO8NUpqrMPAm0Zce18eS4pMq9LKNB89V2eogyJRQMCL2N3OYIGOpKm5Hc7t0BnObc6V1cV3X7ib+xQkC4OhdtGax1sLagEBDqeEWsddbX35bLfzI1PvmVh2OgHgf58fGWxwkVzztbK+a/u1sBbcABuUADy4W5U9ivFVO/eq+Hh8Jcwibr8xuH88psfydTbT5crcvCbyOe2tVkXknqi7+U8zgEd1Rut3V/hpL+MReWnIacv4/Ca2pVHKRUzdbBMSBnsBvpsRfjlqXH7qaeAnhe+YXsBceQDEW13+0ffMEV+62m5afLm1vnLl7pUPIr65yx+GX4ytvb+V5P6VtVucoGht/X+fxmZQw91zMw/qLi9/6ec0/aHfNhTckXJvy8iZaVSxk1wBpbhfwA/h52nbdUeCVsW9W5Y06JHgDUcWPgbI3vM4JF0IPA25+e+ST1J+1ix+rhvnXH4SM/CcfKWIiJg1IiICIiAiIgf//Z'
  },
		{ id: 2, 
		name: 'Handbag', 
		price: 599, 
		image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyVK1D68VK7nbK_NFyw5sUlrSeYmCpvh3ow&usqp=CAU'
		},
		{ id: 3, 
		name: 'Shirt', 
		price: 799, 
		image: 
'https://png.pngtree.com/png-clipart/20230430/original/pngtree-white-fashion-shirt-png-image_9125111.png'
		},
    { id: 4, 
      name: 'Laptop backpack', 
      price: 1099, 
      image: 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmNGbIsAlTfJAE_kzyAniTTAZPIox6Bfoww&usqp=CAU'
      },
      { id: 5, 
        name: 'Black hoodie', 
        price: 2599, 
        image: 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMn7_-Drjrn4sYtaiK0LeYTILf4u0b0ffg4Q&usqp=CAU'
        },
	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
							.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? { 
				...item, quantity: item.quantity + 1 } 
				: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
							.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) => 
						total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
			<SearchComponent searchCourse={searchCourse} 
							courseSearchUserFunction=
								{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
