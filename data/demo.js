const exam = {
    id: "1", //试卷id
    name: "广东工业大学语文考试",
    start_time: "15:30",
    end_time: "17:30",
    exam_date: "2019-01-01",
    ques: {
        info: "<p>第一部分：单向选择题（共15题）每题2分</p><p>第二部分：多项选择题（共15题）每题2分</p><p>第三部分：判断题（共15题）每题2分</p>", //考试简介
        allques_num:30,//所以题目数量
        questions: [{ //考试题目（大题）
                info: "", //大题描述
                name: "单选题",
                topics_num: "15", //小题数
                topics_type: 1, //题目类型 1单选 2 多选 3判断
                topics: [ //小题
                    {
                        topic_index: "1",
                        topic_info: "我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目我是题目",
                        selections: ["a选项", "b选项", "c选项"]
                    },
                    {
                        topic_index: "2",
                        topic_info: "我是题目2我是题目2我是题目2",
                        selections: ["a选项", "b选项", "c选项"]
                    }
                ]
            },
            { //考试题目（大题）
                info: "", //大题描述
                name: "判断题(每题2分)",
                topics_num: "", //小题数
                topics_type: 3, //题目类型 1单选 2 多选 3判断
                topics: [ //小题
                    {
                        topic_index: "1",
                        topic_info: "",
                    },
                    {
                        topic_index: "2",
                        topic_info: "",
                    }
                ]
            }
        ]

    }

}
module.exports = {
    exam:exam
}