from app import app
from flask import render_template, request, session, redirect
from app.models.recipe import Recipe
from app.models.user import User


@app.route('/<int:user_id>/create')
def new_recipe(user_id):
    if 'uuid' not in session:
        return redirect('/')
    user = User.get_one_by_id(user_id)
    return render_template('new_recipe.html', user=user)


@app.route('/<int:user_id>/save_recipe', methods=['POST'])
def save_recipe(user_id):
    if 'is_quick' in request.form:
        data = {'is_quick': 1}
    else:
        data = {'is_quick': 0}

    data = {
        **data,
        'name': request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'date_cooked': request.form['date_cooked'],
        'user_id': user_id
    }
    Recipe.create(data)
    return redirect('/home')


@app.route('/<int:recipe_id>/update_recipe', methods=["POST"])
def update_recipe(recipe_id):

    if 'is_quick' in request.form:
        data = {'is_quick': 1}
    else:
        data = {'is_quick': 0}

    data = {
        **data,
        'name': request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'date_cooked': request.form['date_cooked'],
        'id': recipe_id
    }
    Recipe.update(data)
    return redirect('/home')


@app.route('/<int:recipe_id>/edit')
def edit_page(recipe_id):
    if 'uuid' not in session:
        return redirect('/')
    print(recipe_id, "Recipe ID passed to edit_page route")
    recipe = Recipe.get_one(recipe_id)
    print(recipe.name)
    return render_template('edit_recipe.html', recipe=recipe)


@app.route('/<int:recipe_id>/delete')
def delete_recipe(recipe_id):
    data = {'id': recipe_id}
    Recipe.delete(data)
    return redirect('/home')


@app.route('/<int:recipe_id>/view')
def view_recipe(recipe_id):
    if 'uuid' not in session:
        return redirect('/')
    recipe = Recipe.get_one(recipe_id)
    return render_template('view_recipe.html', recipe=recipe)
