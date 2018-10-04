// src/redux/reducers/articles.js
const initialState = {
    articles: [],
    article: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_ARTICLES' :
        return {
            ...state,
            articles: action.articles
        }
        case 'VIEW_ARTICLE':
        return {
            ...state,
            article: action.article
        }
        case 'CLAP_ARTICLE':
        let article = Object.assign({}, state.article)
        article.claps++
        return {
            ...state,
            article: article
        }
        case 'ADD_COMMENT':
        article = Object.assign({}, state.article)
        let comment = action.comment
        article.comments.push(comment)
        return {
            ...state,
            article: article
        }
        default:
            return state
    }
}
