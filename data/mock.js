var exam={
    id:"",//试卷id
    name:"",
    start_time:"",
    end_time:"",
    exam_date:"",
    ques:{
        info:"",//考试简介
        questions:[
            {//考试题目（大题）
            info:"",//大题描述
            name:"单选题",
            topics_num:"",//小题数
            topics_type:1,//题目类型 1单选 2 多选 3判断
            topics:[//小题
            {
                topic_index:"1",
                topic_info:"",
                selections:["a选项","b选项","c选项"]
            },
            {
                topic_index:"2",
                topic_info:"",
                selections:["a选项","b选项","c选项"]
            }
            ]
        },
        {//考试题目（大题）
            info:"",//大题描述
            name:"判断题(每题2分)",
            topics_num:"",//小题数
            topics_type:3,//题目类型 1单选 2 多选 3判断
            topics:[//小题
            {
                topic_index:"1",
                topic_info:"",
            },
            {
                topic_index:"2",
                topic_info:"",
            }
            ]
        }
    ]
        
    }

}