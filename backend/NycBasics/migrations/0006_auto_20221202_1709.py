# Generated by Django 2.2 on 2022-12-02 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('NycBasics', '0005_auto_20221129_1153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=500),
        ),
    ]
