"use strict"

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Singleposts", [
			{
				id: 1,
				user_id: 1,
				title: "예스맨",
				image: "내 장면.jpg",
				genre: "코미디",
				content: "이장면이 기억나는사람 조아요!",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				user_id: 2,
				title: "월E",
				image: "귀요미.jpg",
				genre: "SF/판타지",
				content: "일편단심귀요미",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				user_id: 3,
				title: "불한당",
				image: "기름뜨겁.jpg",
				genre: "액션",
				content: "인정사정없이 부어버려",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				user_id: 1,
				title: "타짜",
				image: "돈잃으면 속쓰린법.jpg",
				genre: "액션",
				content: "뺨다구 두대에 이만원",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 5,
				user_id: 2,
				title: "오징어게임",
				image: "무서워 이러다 다 주글꺼야.jpg",
				genre: "액션",
				content: "456억은 내꺼",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 6,
				user_id: 3,
				title: "D.P",
				image: "뭐라도해야지 두두두.jpg",
				genre: "전쟁",
				content: "뭐라도 해야지.....",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 7,
				user_id: 1,
				title: "럭키",
				image: "제가슴만봐요.jpg",
				genre: "코미디",
				content: "너어어어어무 무서워요",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 8,
				user_id: 3,
				title: "그레이의 50가지 그림자",
				image: "헠.jpg",
				genre: "로맨스",
				content: "로맨스맞나? ",
				description_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Singleposts", null, {})
	},
}