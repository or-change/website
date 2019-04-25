module.exports = async function (ctx, next) {
	const {sequelize, request, response} = ctx;

	const Article = sequelize.model('article');
	const Language = sequelize.model('language');
	const Commit = sequelize.model('commit');

	const {articleId, languageId} = request.params;

	const article = await Article.findByPk(articleId);

	if (!article) {
		ctx.throw(404, 'The article is not existed.');

		return;
	}

	const language = await Language.findByPk(languageId);

	if (!language) {
		ctx.throw(404, 'The language of article is not existed.');

		return;
	}

	const commit = await Commit.findByPk(language.head);

	ctx.data = {
		language, commit
	};

	await next();

	response.body = {
		hash: article.hash, title: language.title, language: language.name,
		abstract: language.abstract, content: commit.content
	};
};