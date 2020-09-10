module.exports = (Sequelize, sequelize) => {
    const Product = sequelize.define('product', {
        name: Sequelize.STRING,
        value: Sequelize.FLOAT,
        installments: Sequelize.INTEGER,
        installmentsValue: Sequelize.FLOAT,
        description: Sequelize.STRING,
        category: {
            type: Sequelize.STRING,
            default: null,
        },
        linkImage: Sequelize.STRING,
    }, {
        timestamps: true,
    });

    return Product;
}

