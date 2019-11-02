 // json转成树形结构
var data;
var tree=[];
data.forEach(element => {
    let id=parseInt(element.categoryid);
    if(tree[id]==undefined)
    {
        tree[id]={
            id:id,
            name:element.category_name,
            children:[]
        }
    }
    tree[id].children.push(element)
});